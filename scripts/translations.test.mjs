import test from 'node:test'
import assert from 'node:assert/strict'
import { hash, translationState } from './translation-store.mjs'

const source = { collection: 'blog', id: 'source', raw: 'Texte français\n', data: {} }
const target = { collection: 'blog', id: 'en/source', raw: 'English text\n', data: { locale: 'en', translationOf: 'source' } }
const key = 'blog/en/source'
const review = () => ({ sourceHash: hash(source.raw), targetHash: hash(target.raw), reviewedAt: '2026-11-02T00:00:00Z' })

test('unreviewed translations stay drafts; approval matches both exact files', () => {
  assert.equal(translationState(target, [source, target], {}), 'draft')
  assert.equal(translationState(target, [source, target], { [key]: { sourceHash: hash(source.raw) } }), 'draft')
  assert.equal(translationState(target, [source, target], { [key]: review() }), 'reviewed')
})
test('French changes invalidate approval and draft baselines without touching English', () => {
  const changed = { ...source, raw: 'Texte français modifié\n' }
  assert.equal(translationState(target, [changed, target], { [key]: review() }), 'outdated')
  assert.equal(translationState(target, [changed, target], { [key]: { sourceHash: hash(source.raw) } }), 'outdated')
  assert.equal(target.raw, 'English text\n')
})
test('English edits require reapproval; CRLF conversions do not', () => {
  assert.equal(translationState({ ...target, raw: 'Edited English\n' }, [source, target], { [key]: review() }), 'edited')
  assert.equal(hash('Text\r\n'), hash('Text\n'))
})
test('missing sources and translation chains are rejected', () => {
  assert.throws(() => translationState(target, [target], {}), /Source française invalide/)
  assert.throws(() => translationState(target, [{ ...source, data: { locale: 'en' } }, target], {}), /Source française invalide/)
})

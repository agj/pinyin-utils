'use strict'

const utils = require('../index')

describe('Codepoint to Unicode', () => {
	it('should convert codepoint "U+6211" into 我', (done) => {
		const result = utils.codepointToUnicode('U+6211')
		result.should.equal('我')
		done()
	})

	it('should convert codepoint "0x6211" into 我', (done) => {
		const result = utils.codepointToUnicode('0x6211')
		result.should.equal('我')
		done()
	})

	it('should convert codepoint 0x6211 into 我', (done) => {
		const result = utils.codepointToUnicode(0x6211)
		result.should.equal('我')
		done()
	})

	it('should convert codepoint "6211" into 我', (done) => {
		const result = utils.codepointToUnicode('6211')
		result.should.equal('我')
		done()
	})
})

describe('Tone number', () => {
	it('should get the right tone number', (done) => {
		const result1 = utils.getToneNumber('wǒ')
		const result2 = utils.getToneNumber('wo3')
		const result3 = utils.getToneNumber('de5')
		const result4 = utils.getToneNumber('de')
		result1.should.equal(3)
		result2.should.equal(3)
		result3.should.equal(5)
		result4.should.equal(5)
		done()
	})
})

describe('Remove tone', () => {
	it('should remove the tone correctly', (done) => {
		const result1 = utils.removeTone('wǒ')
		const result2 = utils.removeTone('wo3')
		const result3 = utils.removeTone('de5')
		const result4 = utils.removeTone('de')
		result1.should.equal('wo')
		result2.should.equal('wo')
		result3.should.equal('de')
		result4.should.equal('de')
		done()
	})
})

describe('Convert', () => {
	it('should convert tone number to mark correctly', (done) => {
		const result1 = utils.numberToMark('lü4')
		const result2 = utils.numberToMark('de')
		const result3 = utils.numberToMark('de5')
		result1.should.equal('lǜ')
		result2.should.equal('de')
		result3.should.equal('de')
		done()
	})
	it('should convert mark to tone number correctly', (done) => {
		const result1 = utils.markToNumber('lǜ')
		const result2 = utils.markToNumber('de')
		result1.should.equal('lü4')
		result2.should.equal('de')
		done()
	})
})

describe('Capitalize', () => {
	it('should capitalize correctly', (done) => {
		const result1 = utils.capitalize('lǜ')
		const result2 = utils.capitalize('lü4')
		const result3 = utils.capitalize('de5')
		const result4 = utils.capitalize('de')
		result1.should.equal('Lǜ')
		result2.should.equal('Lü4')
		result3.should.equal('De5')
		result4.should.equal('De')
		done()
	})
})

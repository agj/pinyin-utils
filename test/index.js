'use strict'

const utils = require('../index')

describe('Codepoint to Unicode', () => {
	it('should convert codepoint "U+6211" into 我', (done) => {
		utils.codepointToUnicode('U+6211') .should.equal('我')
		done()
	})

	it('should convert codepoint "0x6211" into 我', (done) => {
		utils.codepointToUnicode('0x6211') .should.equal('我')
		done()
	})

	it('should convert codepoint 0x6211 into 我', (done) => {
		utils.codepointToUnicode(0x6211) .should.equal('我')
		done()
	})

	it('should convert codepoint "6211" into 我', (done) => {
		utils.codepointToUnicode('6211') .should.equal('我')
		done()
	})
})

describe('Tone number', () => {
	it('should get the right tone number', (done) => {
		utils.getToneNumber('wǒ')     .should.equal(3)
		utils.getToneNumber('wo3')    .should.equal(3)
		utils.getToneNumber('de5')    .should.equal(5)
		utils.getToneNumber('de')     .should.equal(5)
		utils.getToneNumber('ń')      .should.equal(2)
		utils.getToneNumber('m̌')      .should.equal(3)
		utils.getToneNumber('biáng')  .should.equal(2)
		utils.getToneNumber('biang2') .should.equal(2)
		utils.getToneNumber('miào')   .should.equal(4)
		utils.getToneNumber('miao4')  .should.equal(4)

		done()
	})
})

describe('Remove tone', () => {
	it('should remove the tone correctly', (done) => {
		utils.removeTone('wǒ')     .should.equal('wo')
		utils.removeTone('wo3')    .should.equal('wo')
		utils.removeTone('de5')    .should.equal('de')
		utils.removeTone('de')     .should.equal('de')
		utils.removeTone('ń')      .should.equal('n')
		utils.removeTone('n2')     .should.equal('n')
		utils.removeTone('m̌')      .should.equal('m')
		utils.removeTone('m3')     .should.equal('m')
		utils.removeTone('biáng')  .should.equal('biang')
		utils.removeTone('biang2') .should.equal('biang')
		utils.removeTone('miào')   .should.equal('miao')
		utils.removeTone('miao4')  .should.equal('miao')

		done()
	})
})

describe('Convert', () => {
	it('should convert tone number to mark correctly', (done) => {
		utils.numberToMark('lü4')    .should.equal('lǜ')
		utils.numberToMark('de')     .should.equal('de')
		utils.numberToMark('de5')    .should.equal('de')
		utils.numberToMark('n2')     .should.equal('ń')
		utils.numberToMark('m3')     .should.equal('m̌')
		utils.numberToMark('biang2') .should.equal('biáng')
		utils.numberToMark('miao4')  .should.equal('miào')

		done()
	})
	it('should convert mark to tone number correctly', (done) => {
		utils.markToNumber('lǜ')    .should.equal('lü4')
		utils.markToNumber('de')    .should.equal('de')
		utils.markToNumber('ń')     .should.equal('n2')
		utils.markToNumber('m̌')     .should.equal('m3')
		utils.markToNumber('biáng') .should.equal('biang2')
		utils.markToNumber('miào')  .should.equal('miao4')

		done()
	})
})

describe('Capitalize', () => {
	it('should capitalize correctly', (done) => {
		utils.capitalize('lǜ')    .should.equal('Lǜ')
		utils.capitalize('lü4')   .should.equal('Lü4')
		utils.capitalize('de5')   .should.equal('De5')
		utils.capitalize('de')    .should.equal('De')
		utils.capitalize('ń')     .should.equal('Ń')
		utils.capitalize('m̌')     .should.equal('M̌')
		utils.capitalize('biáng') .should.equal('Biáng')
		utils.capitalize('miào')  .should.equal('Miào')
		utils.capitalize('miao4') .should.equal('Miao4')

		done()
	})
})

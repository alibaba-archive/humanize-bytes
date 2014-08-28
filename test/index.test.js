/*!
 * humanize-byte - test/index.test.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var bytes = require('..');

describe('humanize-bytes', function () {
  describe('when number', function () {
    it('should not transform', function () {
      bytes(1024).should.equal(1024);
    });
  });

  describe('when string', function () {
    it('should transform to number', function () {
      bytes('1kb').should.equal(1024);
    });
  });
});

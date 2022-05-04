QUnit.module('add', function() {
    QUnit.test('létezik-e a generalo', function(assert) {
      assert.ok(typeof generalo === "function", "létezik a generalo");
    });
    QUnit.test('1 arab szam = I ????', function(assert) {
        assert.equal(generalo(1), "I");
      });
      QUnit.test('10 arab szam = X ????', function(assert) {
        assert.equal(generalo(10), "X");
      });
      QUnit.test('38 arab szam = XXXVIII ????', function(assert) {
        assert.equal(generalo(38), "XXXVIII");
      });
      QUnit.test('1000 arab szam = I ????', function(assert) {
        assert.equal(generalo(1000), "M");
      });
      QUnit.test('11 arab szam = XI ????', function(assert) {
        assert.equal(generalo(11), "XI");
      });
      QUnit.test('19 arab szam = XIX ????', function(assert) {
        assert.equal(generalo(19), "XIX");
      });
  });
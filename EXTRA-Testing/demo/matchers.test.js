xdescribe('Tests that will pass', () => {
  it('should pass if exact match', () => {
    const number = 3;
    const string = 'Franco';
    expect(number).toBe(3);
    expect(string).toBe('Franco');
  });
  it('should pass if recursively match (object)', () => {
    const obj = {name: 'Franco', age: 27};
    expect(obj).toEqual({name: 'Franco', age: 27});
  });
  
  it('should pass if recursively match (array)', () => {
    const array = [1,2,3,4,5];
    expect(array).toEqual([1,2,3,4,5]);
  });
})

xdescribe('Tests that will not pass', () => {
  it('should fail if not exact match (object)', () => {
    const obj = {name: 'Franco', age: 27};
    expect(obj).toBe({name: 'Franco', age: 27});
  });
  
  it('should fail if not exact match (array)', () => {
    const array = [1,2,3,4,5];
    expect(array).toBe([1,2,3,4,5]);
  });
})

xdescribe('Extra matchers', () => {

    it('toBeNull', () => {
      expect(null).toBeNull();
      // expect(undefined).toBeNull();
    });
  
    it('toBeUndefined', () => {
      expect(undefined).toBeUndefined();
      // expect(null).toBeUndefined();
    });

    it('toBeDefined', () => {
      expect(2).toBeDefined();
      expect(0).toBeDefined();
      expect('').toBeDefined();
      expect('Franco').toBeDefined();
      expect([]).toBeDefined();
      expect([1,2,3]).toBeDefined();
      expect({}).toBeDefined();
      expect({a: 1}).toBeDefined();
      expect(null).toBeDefined();
      // expect(undefined).toBeDefined();
    });

    // toBeFalsy --> opposite
    it('toBeTruthy', () => {
      expect(true).toBeTruthy();
      expect(2).toBeTruthy();
      expect('Franco').toBeTruthy();
      expect([]).toBeTruthy();
      expect([1,2,3]).toBeTruthy();
      expect({}).toBeTruthy();
      expect({a: 1}).toBeTruthy();
      // expect(0).toBeTruthy();
      // expect('').toBeTruthy();
      // expect(undefined).toBeTruthy();
      // expect(null).toBeTruthy();
    });

    it('toBeCloseTo', () => {
      // expect(0.1 + 0.2).toEqual(0.3);
      expect(0.1 + 0.2).toBeCloseTo(0.3);
      // expect(0.11).toBeCloseTo(0.1);
      expect(0.11).toBeCloseTo(0.1, 1);
      expect(0.174927142).toBeCloseTo(0.17492, 4);
    });

    it('toMatch', () => {
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch('Franco');
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/Franco/);
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/palabras$/);
    });

    it('toContain', () => {
      const array = ['Franco', 'Toni', 'Martu', 'Mati'];
      expect(array).toContain('Martu');
      expect(array).not.toContain('Diego');

      expect('Soy Henry').toContain('Henry');
    });

    // also used as .toThrowError
    it('toThrow', () => {
      function error() {
        throw new TypeError('An error');
      }

      // function definition, not executed!
      expect(error).toThrow();
      expect(error).toThrow('An error');
      // expect(error).toThrow('An errorrrrs');
      expect(error).toThrow('error');
      expect(error).toThrow(/error$/);
      expect(error).toThrow(TypeError);
      // expect(error).toThrow(SyntaxError);
      expect(error).toThrow(new TypeError('An error'));
    });
});





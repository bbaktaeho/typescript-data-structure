/**
 * * 연결 리스트의 요소
 * @value : 실질적인 값
 * @next : 다음으로 오는 요소
 */
class N {
  private _value;
  private _next;
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  public get getValue(): any {
    return this._value;
  }

  public get getNext(): N {
    return this._next;
  }

  public set setValue(v: any) {
    this._value = v;
  }

  public set setNext(next: N) {
    this._next = next;
  }
}

/**
 * * 연결 리스트
 * @node : 연결 리스트의 요소
 * @head : 리스트 시작점
 * @tail : 리스트 마지막점
 * @length : 리스트 크기
 */

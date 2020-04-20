/**
 * * 해쉬테이블
 * * 키와 데이터를 저장하는 구조
 * * 보통 배열로 미리 hash 사이즈 만큼 생성 후에 사용(공간과 탐색 시간을 맞바꾸는 기법)
 * @hash 임의 값을 고정 길이로 변환하는 것
 * @hashTable 키 값의 연산에 의해 직접 접근이 가능한 데이터 구조
 * @hashFunction 키에 대해 산술 연살을 이용해 데이터 위치를 찾을 수 있는 함수
 * @hashValue 키를 해싱 함수로 연산해서 해쉬 값을 알아내고 이를 기반으로 해쉬 테이블에서 해당 키에 대한 데이터 위치를 일관성 있게 찾을 수 있음
 * * 주요 용도 : 검색, 캐쉬 구현
 * * 장점 : 데이터 저장/읽기 속도가 빠름
 * * 장점 : 중복 처리가 쉬움
 * ! 단점 : 일반적으로 저장공간이 좀더 필요함
 * ! 단점 : 여러 키에 해당하는 주소가 동일할 경우 충돌을 해결하기 위한 별도 구조가 필요
 * todo : 충동 해결 알고리즘 (open hashing: chaining, close hashing: )
 * todo : chaining 은 리스트로 구현 -> 키 값과 같이 저장시킴
 * todo : linear probing 은 해쉬테이블 안에서 구현 -> 빈 위치에 저장
 * ? 빈번한 충돌을 개선하는 법 : 해쉬 테이블 저장공간을 확대
 * ? 유명한 해쉬 함수 : SHA-256
 * * 일반적인 경우 : O(1)
 * * 촤악의 경우 : O(n)
 */

// chaining 기법
class HashTable {
  private hashTable: Array<any>;
  private hashSize: number;
  constructor(size: number) {
    this.hashTable = new Array(size);
    this.hashSize = size;
  }

  public desc() {
    console.log(this.hashTable);
  }

  public getKey(data: string): number {
    // sha-256 을 이용하는 것이 좋음
    let key: number = 0;
    for (let i = 0; i < data.length; i++) {
      key += data.charCodeAt(i);
    }
    return key;
  }

  public hashFunction(key: number) {
    return key % this.hashSize;
  }

  public saveValue(data: string, value) {
    const hash = this.getKey(data);
    const hashAddress = this.hashFunction(hash);

    if (!this.hashTable[hashAddress]) {
      this.hashTable[hashAddress] = [];
      this.hashTable[hashAddress].push(`${hash}:${value}`);
    } else this.hashTable[hashAddress].push(`${hash}:${value}`);
  }

  public readValue(data): string {
    let result;
    const hash = this.getKey(data);
    const hashAddress = this.hashFunction(hash);
    if (Array.isArray(this.hashTable[hashAddress])) {
      this.hashTable[hashAddress].forEach((e) => {
        const db = e.split(":");

        if (Number(db[0]) == hash) {
          result = db[1];
          return;
        }
      });
      return result;
    } else return "not exists";
  }
}

const table = new HashTable(8);
table.saveValue("태호", "01011112222");
table.saveValue("훈이", "01033332222");
table.saveValue("지훈", "01012341234");
table.saveValue("태수", "01043432323");
table.saveValue("지민", "01098982323");
table.saveValue("솔희", "01077778888");
table.saveValue("보겸", "01001010101");
table.saveValue("유리", "01000000000");
table.saveValue("크리", "01099999999");
table.desc();
console.log(table.readValue("지민"));

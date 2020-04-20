/**
 * * 해쉬테이블
 * * 키와 데이터를 저장하는 구조
 * * 보통 배열로 미리 hash 사이즈 만큼 생성 후에 사용(공간과 탐색 시간을 맞바꾸는 기법)
 * @hash 임의 값을 고정 길이로 변환하는 것
 * @hashTable 키 값의 연산에 의해 직접 접근이 가능한 데이터 구조
 * @hashFunction 키에 대해 산술 연살을 이용해 데이터 위치를 찾을 수 있는 함수
 * @hashValue 키를 해싱 함수로 연산해서 해쉬 값을 알아내고 이를 기반으로 해쉬 테이블에서 해당 키에 대한 데이터 위치를 일관성 있게 찾을 수 있음
 * * 장점 : 데이터 저장/읽기 속도가 빠름
 * * 장점 : 중복 처리가 쉬움
 * ! 단점 : 일반적으로 저장공간이 좀더 필요함
 * ! 단점 : 여러 키에 해당하는 주소가 동일할 경우 충돌을 해결하기 위한 별도 구조가 필요
 * * 주요 용도 : 검색, 캐쉬 구현
 * todo : 충동 해결 알고리즘
 */

const hashSize = 8;
const hashTable = new Array<string>(8);

function hashFunction(key) {
  return key % 8;
}

function saveValue(data: string, value) {
  let hashAddress = hashFunction(data.charCodeAt(0));
  hashTable[hashAddress] = value;
}

function readValue(data: string) {
  let hashAddress = hashFunction(data.charCodeAt(0));
  return hashTable[hashAddress];
}

saveValue("태호", "01092121653");
const result = readValue("태호");
console.log(result);
console.log(hashTable.length);
console.log(hashTable);
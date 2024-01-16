
// Опишите тип состояния DataState и перечисление LoadingStatus. 
// Затем реализуйте функцию handleData(), которая принимает 
// на вход DataState и возвращает строку в зависимости 
// от состояния: loading... при LoadingStatus.loading, 
// error при LoadingStatus.error, строку из числового поля data 
// при LoadingStatus.success. 
// Если статус не входит в перечисление, функция возвращает unknown.

enum LoadingStatus {
  Loading = 'Loading',
  Error = 'Error',
  Success = 'Success'
}

type DataState = 
  | { status: LoadingStatus.Loading } 
  | { status: LoadingStatus.Error, error: Error } 
  | { status: LoadingStatus.Success, data: number };

function handleData(data: DataState): string {
  if(data.status === LoadingStatus.Loading ) return 'loading...';
  if(data.status === LoadingStatus.Error) return 'error';
  if(data.status === LoadingStatus.Success) return data.data + '';
  return 'unknown';
}

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42

const news: DataState = { status: LoadingStatus.new };
console.log(handleData(news));
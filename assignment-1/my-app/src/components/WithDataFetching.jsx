// Server Component

export default function withDataFetching(WrappedComponent, fetchData) {
  return async function WrappedWithFetchedData(props) {
    const data = await fetchData();

    // `WrappedComponent` must be a Client Component
    return <WrappedComponent {...props} data={data} />;
  };
}

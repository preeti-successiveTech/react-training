import Weather from '@/components/components/Weather'
export default function showGreeting(){
    return(<>
        <div>
           <h1>Weather Component</h1>
        <Weather temperature={23} />
        <Weather temperature={26} />
        <Weather temperature={5} />
              </div>
    </>);
}
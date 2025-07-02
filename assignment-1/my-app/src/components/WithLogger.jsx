"use client";
import { useEffect, useRef } from 'react';

export default function withLogger(WrappedComponent) {
  return function LoggerComponent(props) {
    const isMounted = useRef(false);

    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      isMounted.current = true;

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      if (isMounted.current) {
        console.log(`${WrappedComponent.name} updated`);
      }
    });

    return <WrappedComponent {...props} />;
  };
}

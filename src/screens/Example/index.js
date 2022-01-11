import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';

export function Example() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /**
     * Function(s) to execute both after the first render and every update.
     * If there are assynchronous calls, it should call setIsLoading(false)
     * when all promisses are resolved.
     */
    setIsLoading(false);
  });

  return (
    /**
     * Return the JSX for your component
     */
    <>
      <Container>
        {/**
         * This ternary operator will render the ActivityIndicator Component
         * when all promisses are resolved.
         */}
        {isLoading ? (
          <ActivityIndicator
            color="white"
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            size="large"
          />
        ) : (
          <Title>Example Title</Title>
        )}
      </Container>
    </>
  );
}

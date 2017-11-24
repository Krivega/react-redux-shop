import React from 'react';

export async function testUpdatesComponents() {
  const { whyDidYouUpdate } = await import('why-did-you-update');

  whyDidYouUpdate(React);
}

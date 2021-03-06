import * as React from 'react';
import { render } from 'mustache';
import { myFetch } from '../../services/myFetch';
import styled from 'styled-components';

export function Remove(props: any) {
  async function handleClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();

    if (confirm('Are you sure?')) {
      const uri = render(props.view, props.data);
      await myFetch(uri, {
        method: 'POST'
      });
      window.location.reload();
    }
  }

  const A = styled.a`
    color: red;
    text-decoration: underline;
    cursor: pointer;
    margin: 0 5px;

    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  `;
  return <A onClick={handleClick}>{props.children || 'remove'}</A>;
}

import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

class DemoButtonSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Buttons</h2>
        </div>
        <div className='rs-detail-section-body'>
          <table>
            <thead>
              <tr>
                <td>Button</td>
                <td>Type</td>
                <td>Source</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Button type='primary'>Primary</Button>
                </td>
                <td>Primary</td>
                <td><pre><code>{"<Button type='primary'>Primary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='secondary'>Secondary</Button>
                </td>
                <td>Secondary</td>
                <td><pre><code>{"<Button type='secondary'>Secondary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='login'>Login</Button>
                </td>
                <td>Login</td>
                <td><pre><code>{"<Button type='login'>Login</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='link'>Cancel</Button>
                </td>
                <td>Link</td>
                <td><pre><code>{"<Button type='link'>Cancel</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='delete'>Delete</Button>
                </td>
                <td>Delete</td>
                <td><pre><code>{"<Button type='delete'>Delete</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='edit'>Edit</Button>
                </td>
                <td>Edit</td>
                <td><pre><code>{"<Button type='edit'>Edit</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='plus'>Plus</Button>
                </td>
                <td>Plus</td>
                <td><pre><code>{"<Button type='plus'>Plus</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='action'>Actions</Button>
                </td>
                <td>Action</td>
                <td><pre><code>{"<Button type='action'>Actions</Button>"}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Disabled Buttons</h3>
          <table>
            <thead>
              <tr>
                <td>Button</td>
                <td>Type</td>
                <td>Source</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Button type='primary' enabled={false}>Primary</Button>
                </td>
                <td>Primary</td>
                <td><pre><code>{"<Button type='primary' enabled={false}>Primary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='secondary' enabled={false}>Secondary</Button>
                </td>
                <td>Secondary</td>
                <td><pre><code>{"<Button type='secondary' enabled={false}>Secondary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='login' enabled={false}>Login</Button>
                </td>
                <td>Login</td>
                <td><pre><code>{"<Button type='login' enabled={false}>Login</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='link' enabled={false}>Cancel</Button>
                </td>
                <td>Link</td>
                <td><pre><code>{"<Button type='link' enabled={false}>Cancel</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='edit' enabled={false}>Edit</Button>
                </td>
                <td>Edit</td>
                <td><pre><code>{"<Button type='edit' enabled={false}>Edit</Button>"}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DemoButtonSection;

import * as React from 'react';
import StyleCss from './style.css';
import { Cross, Checkmark, Loading } from '../../components/Icons';

let seed = 0;
const now = Date.now();

function getUuid(): string {
  return `notification_${now}_${seed++}`;
}

export interface Message {
  content: React.ReactNode | string;
  type?: 'success' | 'loading' | 'failed';
  id?: string;
}
export interface NotificationState {
  messages: Message[];
}
class Notification extends React.PureComponent<{}, NotificationState> {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  add(message: Message, duration = 3000): string {
    const uuid: string = getUuid();
    message.id = uuid;
    this.setState({ messages: [...this.state.messages, message] });
    if (duration > 0) {
      setTimeout(() => {
        this.remove(message.id);
      }, duration);
    }
    return uuid;
  }

  remove(id: string): void {
    this.setState(previousState => {
      return {
        messages: previousState.messages.filter(message => message.id !== id)
      };
    });
  }

  render(): React.ReactNode {
    return this.state.messages.map(message => (
      <div className={StyleCss.notification} key={message.id}>
        <ShowIcon type={message.type} />
        {message.content}
      </div>
    ));
  }
}
interface ShowIconProps {
  type?: 'success' | 'loading' | 'failed';
}
function ShowIcon(props: ShowIconProps): React.ReactElement {
  switch (props.type) {
    case 'success':
      return <Checkmark fill="#fff" />;
    case 'failed':
      return <Cross fill="#fff" />;
    case 'loading':
      return <Loading fill="#fff" />;
    default:
      return null;
  }
}
export default Notification;

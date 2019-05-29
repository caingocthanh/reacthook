import React, {useEffect,useState, Component} from 'react';

/**
 * Ví dụ khác liên quan đến việc Effect not clean
 */
/*
function Example(){
    const [count, setCount]=useState(0);

    /*
    Hoạt động tương tự như:
        - componentDidMount
        - componentDidUpdate
    */

    /**
     * Cập nhật title thông qua API browser document
     * 
     */
    /*
    useEffect(()=>{
        document.title=`You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click for Effect Hook
            </button>
        </div>
    );
}*/
 /**
  * end
  */


/**
 * Ví dụ khác liên quan đến việc Effect with clean
 */
/**Trường hợp sử dụng class */
class FriendStatus extends Component{
    constructor(props){
        super(props);
        this.state={isOnline:null};
        this.handleStatusChange=this.handleStatusChange.bind(this);
    }

    //Thực hiện sau khi render
    componentDidMount(){
        ChatAPI.subscribeToFriendStatus(
            this.props.frend.id,
            this.handleStatusChange
        );
    }

    //Thực hiện khi kết thúc render, dọn dẹp
    componentWillUnmount(){
        ChatAPI.unsubscribeFromFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }
    

    handleStatusChange(status){
        this.setState({
            isOnline: status.isOnline
        });
    }

    render(){
        if(this.state.isOnline===null){
            return 'Loading...';
        }
        return this.state.isOnline ? 'Online' : 'Offline';
    }
}
/**Trường hợp sử dụng useEffect */
import React, * as react from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
/**
 * Ví dụ liên quan kết hợp useEffect và useState để theo dõi và cập nhật multiple effect
 */









export default FriendStatus;
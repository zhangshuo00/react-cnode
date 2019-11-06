import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TopicTab from './TopicTab'
import Pages from './Pages'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            selectTab:'',
            page:''
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data})
        });
    }
    componentDidUpdate(prevState,prevProps){
        // console.log(prevProps,this.state);
        if(prevProps.selectTab !== this.state.selectTab){
            // console.log('false')
            fetch('https://cnodejs.org/api/v1/topics?tab='+this.state.selectTab+'&page=1')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
        }else if(prevProps.selectTab == this.state.selectTab && prevProps.page !== this.state.page){
            fetch('https://cnodejs.org/api/v1/topics?tab='+this.state.selectTab+'&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
        }
        // console.log(this.state.data[0].author.avatar_url)
    }
    selectTab = (tab)=>{
        switch(tab){
            case '全部':
                tab = 'all';
                break;
            case '精华':
                tab = 'good';
                break;
            case '分享':
                tab = 'share';
                break;
            case '问答':
                tab = 'ask';
                break;
            case '招聘':
                tab = 'job';
                break;
        }
        this.setState({
            selectTab:tab
        },()=>{
            console.log(this.state.selectTab)
        })
    }
    selectPage = (idx)=>{
        this.setState({
            page:idx
        },()=>{console.log(this.state.page)})
    }
    render() {
        return (
            <div>
                <TopicTab getTab={this.selectTab}/>
                <div>
                        {
                            // this.state.data.filter((item)=>{console.log(item.tab);return item.tab.toString() === this.state.selectTab}).map((item)=>(
                            //     <li style={{width:800,height:50,overflow:'hidden'}} dangerouslySetInnerHTML={{__html:item.title}}></li>
                            // ))
                            this.state.data.map((item)=>(
                                <div style={{height:'50px'}}><img style={{width:'30px',height:'30px',float:"left",paddingRight:'20px',paddingLeft:'10px'}} src={item.author.avatar_url}/><span style={{width:'50px',marginRight:'10px',float:'left',fontSize:'10px'}}>{item.reply_count}/{item.visit_count}</span><span style={{borderRadius:'4px',textAlign:'center',width:'40px',fontSize:'15px',float:'left',marginRight:'15px',backgroundColor:'#e5e5e5'}}>{item.tab}</span><Link to={'/detail/'+item.id} style={{width:800,overflow:'hidden',float:'left'}} dangerouslySetInnerHTML={{__html:item.title}}></Link><span style={{width:'70px',fontSize:'10px',float:'right'}}>1小时前</span></div>
                            ))
                        }
                </div>
                <Pages getPages={this.selectPage}/>
            </div>
        )
    }
}

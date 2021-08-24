import React, { useState } from "react"
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Content } from '../../components/Content';

const Login:React.FC = () => {
  const tabs:{id:number,title:string}[] = [
    {id:1,title:"test1"},
    {id:2,title:"test2"},
    {id:3,title:"test3"},
  ]
  const [tabState, setTabState] = useState<number>(1)
  const handleChange = (event: React.ChangeEvent<{}>, value: any)=>{
    console.log(event)
    console.log(value)
    setTabState(value)
  }
  return (
    <div>
      <div>Login</div>
      <Paper square>
        <Tabs
          value={tabState}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
        {
          tabs.map((v)=>(
            <Tab label={v.title} value={v.id} />
          ))
        }
        </Tabs>
      </Paper>
      {
        tabs.map((v)=>(
          <Content content={v.title}></Content>
        ))
      }
    </div>
  )
}

export default Login
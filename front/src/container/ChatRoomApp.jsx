import React, { Fragment, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Redirect, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AboutLayout from '../components/about/AboutLyout';
import AboutMe from '../components/about/AboutMe';
import ContactUs from '../components/about/common/ContactUs';
import IntroducingTeam from '../components/about/IntroducingTeam';
import ChatRoom from '../components/chatroom/ChatRoom';
import PersonalChat from '../components/chatroom/PersonalChat';
import PersonalChatContext from '../components/context/PersonalChatContext';
import CarinaeLayout from '../components/layout/CarinaeLayout';
import MainLayout from '../components/layout/MainLayout';
import Login from '../components/login/Login';
import StartPage from '../components/StartPage';
import EditUser from '../components/user/EditUser';
import Verification from '../components/login/Verification';
import SignUp from '../components/login/SignUp';
import { getSingleUserService } from '../services/userServices';


const ChatRoomApp = (props) => {
    const [loginedUser, setloginedUser] = useState();
    const user_id = localStorage.getItem('userId')
    console.log(user_id)
    // useEffect(async () => {
    //     if (props.location.pathname === "/PersonalChat") {
    //         try {
    //             const { state, data } = await getSingleUserService(user_id);

    //             setloginedUser(data)

    //         } catch {

    //         }
    //     }


    // }, [])



    return (
        <Fragment>
            <Switch>


                <Route path={['/', '/chatroom']}>
                    <Switch>
                        <Route exact path='/' component={StartPage}></Route>
                        <Route path="/verification" component={Verification}></Route>
                        <Route path="/signup" component={SignUp}></Route>
                        {/* <Route path='/PersonalChat' render={() => loginedUser !== null ? (<PersonalChatContext><PersonalChat /></PersonalChatContext>) : (<Redirect to="/" />)}></Route> */}
                        <Route path='/personalchat' render={() => (<PersonalChatContext><PersonalChat /></PersonalChatContext>)}></Route>


                    </Switch>

                </Route>


                {/* <Route path={["/PersonalChat", "/EditUser"]}>
                    <CarinaeLayout>
                        <Switch>
                            <Route path={'/PersonalChat'} render={() => loginedUser !== null ? (<PersonalChatContext><PersonalChat /></PersonalChatContext>) : (<Redirect to="/" />)}></Route>
                            <Route path={'/EditUser/:id'} component={EditUser}></Route>
                        </Switch>
                    </CarinaeLayout>
                </Route>


                <Route path={['/', '/chatroom', '/login']}>

                    <Switch>
                        <Route exact path='/' component={StartPage}></Route>
                        <MainLayout>

                            <Switch>
                                <Route path="/chatroom" component={ChatRoom}></Route>
                                <Route path='/Login' component={Login}></Route>


                            </Switch>

                        </MainLayout>
                    </Switch>
                </Route>
                <Route path={[ '/AboutMe']}>
                    <Switch>


                        <AboutLayout>
                            <Switch>
                                <Route path={'/AboutMe'} exact component={AboutMe}></Route>
                                <Route path={'/IntroTeam'} component={IntroducingTeam}></Route>

                                <Route path={'/ContactUs'} component={ContactUs}></Route>

                            </Switch>
                        </AboutLayout>
                    </Switch>
                </Route> */}

            </Switch>
        </Fragment>

    );
}

export default withRouter(ChatRoomApp);
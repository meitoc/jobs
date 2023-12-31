
import { useContext } from "react";
import { ContextStatus } from "../App";
export function News() {
    return (<>
    <p>Welcome to <b>GoJob</b> - the premier job search platform for the tech industry! If you&apos;re looking for a career in information technology, programming, software development, or any other tech-related field, then you&apos;ve come to the right place.</p>
    <p>At <b>GoJob</b>, we&apos;re committed to helping job seekers find the best possible opportunities in the tech industry. Our platform features a wide range of job listings from top employers in the field, and our powerful search tools make it easy to find the perfect job for your skills and experience.</p>
    <p>Whether you&apos;re just starting out in your tech career or you&apos;re looking to take the next step, <b>GoJob</b> has everything you need to succeed. So why wait? Sign up today and start exploring the exciting world of tech job opportunities!</p>
    </>);
}
// chang this function later for security
export function Profile() {
    const {loginStatus} = useContext(ContextStatus);
    return (loginStatus?
    <>
        <p>Name: ABC</p>
        <p>Sex: male</p>
        <p>Skills: PHP, JS, C</p>
    </>
    :
    <p>{`You can't access thispage! Please log in!`}</p>);
}
export function Interviews() {
    const {loginStatus} = useContext(ContextStatus);
    return (
        loginStatus?
        <p>You received 5 interview invites.</p>
        :
        <p>{`You can't access thispage! Please log in!`}</p>
    );
}
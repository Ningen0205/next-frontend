import type { NextPage } from 'next'


const Test: NextPage = () => {

    return (
        <div>
            <h1>hello nextjs</h1>
            <p>Im Harano Ikuto</p>

            <form action='/api/users' method='post'>
                <label>id:</label>
                <input type="number" name="id" id="id" required/>

                <label>firstName:</label>
                <input type="text" name="firstName" id="firstName" required/>

                <label>lastName:</label>
                <input type="text" name="lastName" id="lastName" required/>

                <label>email:</label>
                <input type="email" name="email" id="email" required/>

                <label>password</label>
                <input type="password" name="password" id="password" required/>

                <input type="submit" value="登録" />
            </form>
        </div>
    )
}


export default Test
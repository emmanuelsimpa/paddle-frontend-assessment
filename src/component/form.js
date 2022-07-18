import styled from "styled-components";

export const Form = styled.form`
    width: auto;
    height: 20px;
    margin: 2px 0;
    border-radius: 40px;
    background: red;
    box-shadow: 0 4px 20px -2px #e9e9e9;
    postion: relative;
    border: 1px solid red;
`


export const Input = styled.input`
    padding-left: 20px;
    width: 330px;
    height: 20px;
    // padding: 10px 5px;
    float: left;   
    font: bold 13px 'lucida sans', 'trebuchet MS', 'Tahoma';
    border: 0;
    background: #fff;
    border-radius: 40px;
    border-top-style: none;
    postion: relative;

    &:focus {
        outline: 0;
        background: #fff;
    }
`

export const Button = styled.button`
    overflow: visible;
    border: 0;
    padding: 3;
    float: left;   
    cursor: pointer;
    height: 20px;
    width: auto;
    font-size: 8px;
    color: #fff;
    text-transform: uppercase;
    background: #198cff;
    border-radius: 40px;
    text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
`

// .search-wrapper {
//     width: 450px;
//     margin: 150px auto 50px auto;
//     border-radius: 40px;
//   background: transparent;
//     box-shadow: 0 4px 20px -2px #e9e9e9;
// }



/* Form text input */

// .search-wrapper input {
//   padding-left: 20px;
//     width: 330px;
//     height: 20px;
//     padding: 10px 5px;
//     float: left;   
//     font: bold 13px 'lucida sans', 'trebuchet MS', 'Tahoma';
//     border: 0;
//     background: #fff;
//     border-radius: 40px;
//     border-top-style: none;
// }

// .search-wrapper input:focus {
//     outline: 0;
//     background: #fff;
//     box-shadow: 0 0 2px rgba(0,0,0,0.8) inset;
// }

// .search-wrapper input::-webkit-input-placeholder {
//    color: #999;
//    font-weight: normal;
//    font-style: italic;
//   padding-left: 20px;
// }

// .search-wrapper input:-moz-placeholder {
    
//     color: #999;
//     font-weight: normal;
//     font-style: italic;
// }

// .search-wrapper input:-ms-input-placeholder {
//     color: #999;
//     font-weight: normal;
//     font-style: italic;
//   border-style: none;
// }   

/* Form submit button */
// .search-wrapper button {
//     overflow: visible;
//     position: relative;
//     float: right;
//     border: 0;
//     padding: 0;
//     cursor: pointer;
//     height: 40px;
//     width: 110px;
//     font: 13px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
//     color: #fff;
//     text-transform: uppercase;
//     background: #198cff;
//     border-radius: 40px;
//     text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
// }  

// .search-wrapper button:hover{    
/*     background: #e54040; */
// }  

// .search-wrapper button:active,
// .search-wrapper button:focus{  
//     background: #198cff;
//     outline: 0;  
// }

// .search-wrapper button:focus:before,
// .search-wrapper button:active:before{
//         border-right-color: #c42f2f;
// }     

// .search-wrapper button::-moz-focus-inner { /* remove extra button spacing for Mozilla Firefox */
//     border: 0;
//     padding: 0;
// }
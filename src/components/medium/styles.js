import styled from 'styled-components';

export const Navicon = styled.i`
    font-size: 20px;
    &.iconNavHelp{
        display: inline-block;
        font-size: 17px;
        position: relative;
        right: 5px;
    }
    &.iconFollow{
        font-size: 14px;
        display: inline-block;
    }
    &.iconNavHelp:before{content:"\\E651"}
    &.iconFollow:before{content:"\\E611"}

`
export const ColXSWrap = styled.div`
    height: 320px;
    width: 299.98px;
    margin-top: 80px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    transition: .2s ease;
    -webkit-transition: .2s ease;
`

export const ColXSAvatar = styled.img`
    border-radius: 40px;
    width: 80px;
    height: 80px;
    margin: -40px 0 10px;
    display: inline-block;
    border: 1px solid #ddd;
`

export const ColXSName = styled.h4`
    font-size: 21px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
`

export const ColXSDescription = styled.p`
    margin: 0 auto 10px;
    max-width: 180px;
    font-size: 13px;
    color: black;
    min-height: 50px;
    line-height: 25px;
`

export const ColXSBtn = styled.a`
    display: block;
    width: 100px;
    padding: 8px 0;
    border-radius: 40px;
    color: #fff;
    touch-action: manipulation;
    cursor: pointer;
    margin: 0 auto;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    background-color: #42c02e;
    border-color: #42c02e;
    &.btn_success:hover{
        text-decoration:none;
        transition: all 0.1s ease-in;
        color: #fff ;
    }
`
export const ColXSMeta = styled.div`
    float: left;
    margin-top: -29px;
    padding-right: 10px;
    font-size: 12px;
    color: #969696;
    background-color: #f8f8f8;
`
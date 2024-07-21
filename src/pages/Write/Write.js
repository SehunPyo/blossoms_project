import React from 'react';
import {Link} from 'react-router-dom'

import { Editor } from '@tinymce/tinymce-react';
import './Write.css';

import ProfileImage from '../../components/Header/ProfileImage/ProfileImage.js';


const SignatureWritePage = () => {
  return (
    <div className='Write'>
        <div className='Wri_Header'>
            <div className='Wri_Logo'>
                <Link to="/home" className='Write_Logo_Title'>🅱️BloSSoms.</Link>
            </div>
            <div className='Wri_Profile'>
                <Link to="/home" className='Write_Notification'>[알림]</Link>
                <ProfileImage className='Write_Notification'/>
                <ProfileImage className='Wriet_ProfileImage'/>
            </div>
        </div>
        <div className='Wir_Title'>
            <input placeholder="제목을 입력하세요." className='Wir_Title_Input'/>
        </div>
        <div className='Wir_Contents'>
            <Editor 
                id = 'tinyEditor'
                className = 'TinyEditor'
                apiKey = 'feq6meeqcl6benvahyq6d09t89flt1dpgp3v209ckfkb4n6x'
                init={{
                    menubar: false,
                    toolbar: 'fontfamily fontsizeinput forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | hr ',
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                      'restoredraft'
                    ],
                  }}
            />
        </div>
        <div className='Wir_Save'>
            <Link to="/home" className='Write_Hd_View'>미리보기</Link>
            <Link to="/write" className='Write_Hd_Save'>게시하기</Link>
        </div>
    </div>
  );
};
 
export default SignatureWritePage;
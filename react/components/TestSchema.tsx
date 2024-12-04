import React from "react";
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

interface TestSchemaProps {
    title: string;
    paragraph: string;
    imageTest: string;
}

const TestSchema = ({ title, paragraph, imageTest }: TestSchemaProps) => {
    const CSS_HANDLES = [
        'contain_schema',
        'title_schema',
        'text_schema',
        'img_schema'
    ]

    const handles = useCssHandles(CSS_HANDLES)
    console.log("IMAGEN",imageTest)

    return(
        <div className={`${handles.contain_schema}`}>
        <h3 className={`${handles.title_schema}`}>{title}</h3>
        <p className={`${handles.text_schema}`}>{paragraph}</p>
        <img src={imageTest} alt="IMG" className={`${handles.img_schema}`} />
        </div>
    );
};

TestSchema.defaultProps = {
    title: "Titulo schema prueba",
    paragraph: "Texto schema prueba",
    imageTest: "https://www.whiskas.com.mx/sites/g/files/fnmzdf4861/files/2022-11/eduquer-son-Chaton-comment-bien-eduquer-son-Chaton-mobile.jpg"
}

TestSchema.schema = {
    title: 'Custom Component',
    type: 'object',
    properties: {
        title: {
            type: 'string',
            title: 'Titulo',
        },
        paragraph: {
            type: 'string',
            title: 'Texto',
        },
        imageTest: {
            title: 'Imagen',
            type: 'string',
            widget: {
                "ui:widget": "image-uploader"
            },
            default: '',
            description: 'Paste the URL',
        },
    }
}

export default TestSchema;
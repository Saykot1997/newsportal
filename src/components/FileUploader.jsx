import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ file, setFile }) => {
    const onDrop = useCallback((acceptedFiles) => {
        // Handle the dropped files
        console.log(acceptedFiles[0]);
        setFile(acceptedFiles[0])
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className={` rounded border-2 border-dashed hover:border-primary w-full p-5 py-8 text-center cursor-pointer ${isDragActive ? 'border-blue-500' : 'border-gray-400'
                }`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className="text-blue-500">Drop the files here...</p>
            ) : (
                <div>
                    <p className=' text-gray-600 font-semibold'>Drag and drop here</p>
                    <p className=' text-gray-600 text-sm my-1'>or</p>
                    <p className=' text-primary  font-semibold'>Browse Files</p>
                </div>
            )}
        </div>
    );
};


export default FileUploader
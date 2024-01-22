import React, { useState } from 'react';
import PhotoModal from './PhotoModal';

const Photos = ({ photo, onDelete }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openPhotoInModal = () => {
        setModalOpen(true);
    };

    return (
        <>
            <img onClick={openPhotoInModal} className="photos" src={photo.url} alt={photo.description} />
            {isModalOpen && <PhotoModal photo={photo} onDelete={onDelete} onClose={() => setModalOpen(false)} />}
        </>
    );
};

export default Photos;
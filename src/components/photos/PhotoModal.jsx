import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PhotoModal = ({ photo, onDelete, onClose }) => {
    const handleDelete = async () => {
        try {
            await onDelete(photo.id);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
            <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{photo.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={photo.url} alt={photo.description} style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>Ištrinti</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default PhotoModal;
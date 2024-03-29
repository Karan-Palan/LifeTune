import React, { useState } from 'react';

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleChatBox} style={styles.toggleButton}>Open Chat</button>
            {isOpen && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <div style={styles.closeButton} onClick={toggleChatBox}>X</div>
                        <div style={styles.chatBox}>
                            <div style={styles.conversation}>
                                <div style={{ ...styles.message, ...styles.userMessage }}>Hello, how can I help you?</div>
                                <div style={{ ...styles.message, ...styles.botMessage }}>Hi there! I'd like to know more about your services.</div>
                            </div>
                            <div style={styles.inputContainer}>
                                <input type="text" placeholder="Type your message..." style={styles.input} />
                                <button style={styles.button}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    toggleButton: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#F39334',
        color: 'black',
        cursor: 'pointer',
    },
    modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '15px',
        padding: '20px',
        maxWidth: '400px',
        width: '90%',
        overflowY: 'auto',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    },
    chatBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    conversation: {
        display: 'flex',
        flexDirection: 'column',
    },
    message: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
    },
    userMessage: {
        backgroundColor: '#268AF3',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: '#F39334',
        alignSelf: 'flex-start',
    },
    inputContainer: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: '1',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#F39334',
        color: 'black',
        cursor: 'pointer',
    },
};

export default ChatBox;

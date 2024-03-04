// SimpleModal.js
function SimpleModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Ensure modal is above other content
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {children}
        <button onClick={onClose} style={{ marginTop: '10px', alignSelf: 'flex-end' }}>Close</button>
      </div>
    </div>
  );
}

export default SimpleModal;

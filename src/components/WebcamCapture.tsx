import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setCapturedImage(imageSrc)
      // Handle the captured photo (imageSrc)
    }
  }, [webcamRef])

  return (
    <div>
      {capturedImage ? (
        <div>
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt='Captured' style={{ width: '100%' }} />
        </div>
      ) : (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            width='100%'
          />
          <button onClick={capturePhoto}>Capture Photo</button>
        </>
      )}
    </div>
  )
}

export default WebcamCapture

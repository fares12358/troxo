import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const FileUpload = () => {
  const { state, dispatch } = useAppContext();
  const { personalSignUp } = state;
  const { file } = personalSignUp;

  const [error, setError] = useState("");

  const updateFileInContext = (file) => {
    dispatch({
      type: "UPDATE_SIGNUP_FIELD",
      field: "file",
      value: file,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      updateFileInContext(selectedFile);
      setError("");
    } else {
      setError("File size should not be more than 5MB");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.size <= 5 * 1024 * 1024) {
      updateFileInContext(droppedFile);
      setError("");
    } else {
      setError("File size should not be more than 5MB");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4">
      <div
        className="border-2 border-dashed border-gray-400 p-6 text-center rounded-lg"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/images/FileUploadIcone.svg"
            alt="File Upload Icon"
            className="w-6"
          />
          <p className="text-base font-semibold">أرفق السجل التجاري</p>
        </div>

        <label
          htmlFor="file-upload"
          className="cursor-pointer text-[#2a2a2ad3] mb-2 block"
        >
          اسحب وأفلت الملف هنا أو انقر لتحميله
        </label>

        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <p className="text-gray-500 text-sm text-center mt-2">
        يجب ألا يتجاوز حجم الملف 5 ميغابايت
      </p>

      {file && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-700">
            Selected file: <span className="font-medium">{file.name}</span>
          </p>
        </div>
      )}

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  );
};

export default FileUpload;

import React from 'react';

export default function SearchBox({
  inputSettings,
  className,
  iconImage,
  onClick,
}) {
  return (
    <div className={['relative', className].join(' ')}>
      <input
        {...inputSettings}
        className="border-b text-base xs:text-xl md:text-3xl w-full py-4 outline-none"
      />
      {iconImage && (
        <div
          className="absolute w-4 h-4 md:w-6 md:h-6 transform -translate-y-1/2 top-1/2 right-3 md:right-5 cursor-pointer"
          onClick={onClick}
        >
          <img src={iconImage} alt="icon" />
        </div>
      )}
    </div>
  );
}

SearchBox.defaultProps = {
  placeholder: '',
  className: '',
  icon: null,
};

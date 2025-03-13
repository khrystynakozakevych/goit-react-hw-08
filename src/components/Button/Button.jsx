import { Tooltip } from 'react-tooltip';
import { useId } from 'react';
import css from './Button.module.css';

const Button = ({ children, tooltip, onClick, className, ...props }) => {
  const tooltipId = useId();
  return (
    <>
      <button
        className={css[className]}
        onClick={onClick}
        data-tooltip-id={tooltip ? tooltipId : undefined}
        {...props}
      >
        {children}
      </button>
      {tooltip && (
        <Tooltip
          id={tooltipId}
          place="left"
          content={tooltip}
          opacity={1}
          style={{
            backgroundColor: '#901f1f',
            color: '#fff',
            borderRadius: '5px',
            padding: '5px',
            fontSize: '12px',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </>
  );
};

export default Button;

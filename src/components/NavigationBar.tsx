import {IconButton} from "./IconButton.tsx";
import icon from '../assets/react.svg';
interface NavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const NavigationBar = ({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {}
}: NavigationBarProps) => {
  return (
      <div className={'w-full flex justify-between'}>
        <div className={'navigation-title-wrapper flex'}>
          {/* Back button */}
          {showBackButton &&
              <IconButton
                  alt={'back-arrow'}
                  iconPath={isDark ? icon : '/vite.svg'}
                  onClick={onBackButtonClick}
              />
          }
          {/* Page name */}
          {showTitle &&
              <h1 className={`text-2xl ${isDark ? 'text-white' : 'text-black'}`}>
                {title}
              </h1>
          }
        </div>
        {/* Close button */}
        {showCloseButton &&
            <IconButton
                alt={'close'}
                iconPath={isDark ? icon : '/vite.svg'}
                onClick={onCloseButtonClick}
            />
        }
      </div>
  )
};

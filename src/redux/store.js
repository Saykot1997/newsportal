import { configureStore } from '@reduxjs/toolkit'
import MenuDataReducer from './menu_data_slice'
import HeaderSubMenuDataReducer from './header_submenu_data_slice'
import CompanyInfoReducer from './company_info_slice'
import SocialAppLinkReducer from './socal_app_link_slice'
import SpecialMenuReducer from './special_menu_slice'

export const store = configureStore({
    reducer: {
        MenuData: MenuDataReducer,
        HeaderSubMenuData: HeaderSubMenuDataReducer,
        CompanyInfo: CompanyInfoReducer,
        SocialAppLink: SocialAppLinkReducer,
        SpecialMenu: SpecialMenuReducer,
    },
})
// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/user" page={UserPage} name="user" />
      <Route path="/rule" page={RulePage} name="rule" />
      <Route path="/organization" page={OrganizationPage} name="organization" />
      <Route path="/location" page={LocationPage} name="location" />
      <Route path="/locations" page={LocationsPage} name="locations" />
      <Route path="/organizations" page={OrganizationsPage} name="organizations" />
      <Route path="/rules" page={RulesPage} name="rules" />
      <Route path="/users" page={UsersPage} name="users" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/settings" page={SettingsPage} name="settings" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

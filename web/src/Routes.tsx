// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'
import LocationsLayout from 'src/layouts/LocationsLayout'
import OrganizationsLayout from 'src/layouts/OrganizationsLayout'
import RulesLayout from 'src/layouts/RulesLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/settings" page={SettingsPage} name="settings" />

        <Set wrap={LocationsLayout}>
          <Route path="/locations/new" page={LocationNewLocationPage} name="newLocation" />
          <Route path="/locations/{id}/edit" page={LocationEditLocationPage} name="editLocation" />
          <Route path="/locations/{id}" page={LocationLocationPage} name="location" />
          <Route path="/locations" page={LocationLocationsPage} name="locations" />
        </Set>

        <Set wrap={OrganizationsLayout}>
          <Route path="/organizations/new" page={OrganizationNewOrganizationPage} name="newOrganization" />
          <Route path="/organizations/{id}/edit" page={OrganizationEditOrganizationPage} name="editOrganization" />
          <Route path="/organizations/{id}" page={OrganizationOrganizationPage} name="organization" />
          <Route path="/organizations" page={OrganizationOrganizationsPage} name="organizations" />
        </Set>

        <Set wrap={RulesLayout}>
          <Route path="/rules/new" page={RuleNewRulePage} name="newRule" />
          <Route path="/rules/{id}/edit" page={RuleEditRulePage} name="editRule" />
          <Route path="/rules/{id}" page={RuleRulePage} name="rule" />
          <Route path="/rules" page={RuleRulesPage} name="rules" />
        </Set>

        <Set wrap={UsersLayout}>
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

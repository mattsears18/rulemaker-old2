// https://chakra-templates.dev/navigation/navbar

import { ReactNode } from 'react'
import { useAuth } from '@redwoodjs/auth'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaCog, FaChevronRight, FaSignOutAlt } from 'react-icons/fa'
import { routes } from '@redwoodjs/router'

const Links = [
  'Write a Rule',
  // 'Rules', 'Organizations', 'Locations', 'Users'
]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    loading: authLoading,
    logIn,
    logOut,
    signUp,
    isAuthenticated,
    userMetadata,
  } = useAuth()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Button as={'a'} variant={'link'} href={'/'}>
              RuleMaker
            </Button>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {!authLoading &&
              (isAuthenticated ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar
                      size={'sm'}
                      name={userMetadata?.name}
                      src={userMetadata?.picture}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem as="a" href="/profile">
                      <HStack>
                        <Avatar
                          size={'md'}
                          name={userMetadata?.name}
                          src={userMetadata?.picture}
                        />
                        <VStack align="start" spacing={0}>
                          <Heading size="sm">{userMetadata?.name}</Heading>
                          {/* <Text fontSize="lg">{userMetadata.name}</Text> */}
                          <Text>See your profile</Text>
                        </VStack>
                      </HStack>
                    </MenuItem>
                    <MenuDivider />
                    {/* TODO use <Link to={routes.settings()}> */}
                    <MenuItem as="a" href="/settings">
                      <HStack justify="space-between" w="full">
                        <HStack>
                          <Icon as={FaCog} />
                          <Text>Settings</Text>
                        </HStack>
                        <Icon as={FaChevronRight} />
                      </HStack>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={logOut}>
                      <HStack>
                        <Icon as={FaSignOutAlt} />
                        <Text>Log Out</Text>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={'flex-end'}
                  direction={'row'}
                  spacing={6}
                >
                  {' '}
                  <Button
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'link'}
                    href={'#'}
                    onClick={logIn}
                  >
                    Sign In
                  </Button>
                  <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    _hover={{
                      bg: 'pink.300',
                    }}
                    onClick={signUp}
                  >
                    Sign Up
                  </Button>
                </Stack>
              ))}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default NavBar

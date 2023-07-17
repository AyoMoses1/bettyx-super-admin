import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineLineChart,
  AiOutlineCalendar,
  AiOutlineSetting,
} from 'react-icons/ai';
import { CurrentPageContext } from '../App';
import { BiLogInCircle, BiPowerOff } from 'react-icons/bi';

const Navbar = () => {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const { setCurrentPage } = useContext(CurrentPageContext);

  return (
    <Box bg="gray.800" color="white" py={['2', '4']} h={['8vh', '12vh']}>
      <Flex maxW="98%" mx="auto" align="center">
        <Box>
          <Flex spacing="10px">
            <Box p={4} mr={2} bg="green" onClick={() => setCurrentPage('home')}>
              <AiOutlineHome size={24} />
            </Box>
            <Box p="4" mr={2} bg="blue">
              <AiOutlineLineChart
                size={24}
                onClick={() => setCurrentPage('statistics')}
              />
            </Box>
            <Box
              p="4"
              mr={2}
              bg="blue"
              onClick={() => setCurrentPage('pending')}
              display={['none', 'block']}
            >
              <AiOutlineMessage size={24} />
            </Box>
            <Box p="4" mr={2} bg="blue" display={['none', 'block']}>
              <AiOutlineCalendar
                size={24}
                onClick={() => setCurrentPage('messages')}
              />
            </Box>
            <Box p="4" mr={2} bg="blue" display={['none', 'block']}>
              <AiOutlineSetting
                size={24}
                onClick={() => setCurrentPage('settings')}
              />
            </Box>
            <Box p="4" mr={2} bg="blue" display={['block', 'none']}>
              <FiSearch size={24} onClick={() => setCurrentPage('settings')} />
            </Box>
          </Flex>
        </Box>
        <InputGroup w="300px" display={['none', 'block']}>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray" />}
            bg="gray1"
          />
          <Input
            type="text"
            placeholder="Search Accounts..."
            sx={{ borderRadius: '0px', paddingLeft: '16' }}
          />
        </InputGroup>
        <Spacer />
        <Box bg="red" onClick={handleLogout} borderRadius={4}>
          <BiPowerOff size={48} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

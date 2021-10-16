import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p><strong>Teacher</strong></p>
      </StatusInfo>
      <Input placeholder="Find student..."/>
    </SearchBarWrapper>
  )
import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listClients } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

interface Client {
  id: string;
  name: string;
}

const client = generateClient();

function App({ signOut }: any) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const result: any = await client.graphql({ query: listClients });
        setClients(result.data.listClients.items);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Clients</h1>
      <button onClick={signOut}>Sign Out</button>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default withAuthenticator(App);

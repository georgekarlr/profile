import { StrictMode} from "react";
import { createRoot} from "react-dom/client";
import ProfilePage from '@/app/page';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProfilePage />
    </StrictMode>
);

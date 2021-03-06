import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HouseDetailComponent } from './house-details/house-details.component';
import { PropertyNotFoundComponent } from './property-not-found/property-not-found.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
    { path: 'uploadimage', component: ImageUploadComponent },
    { path: 'housedetails', component: HouseDetailComponent },
    { path: 'propertynotfound', component: PropertyNotFoundComponent },
    { path: 'chatbot', component: ChatbotComponent },
    { path: '', redirectTo: '/uploadimage', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

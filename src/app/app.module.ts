import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageUploadService } from './services/image-upload.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { CribsService } from './services/cribs.service';
import { HttpModule } from '@angular/http';
import { HouseDetailComponent } from './house-details/house-details.component';
import { PropertyNotFoundComponent } from './property-not-found/property-not-found.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageListComponent } from './chatbot/message-list/message-list.component';
import { MessageItemComponent } from './chatbot/message-item/message-item.component';
import { MessageFormComponent } from './chatbot/message-form/message-form.component';
import { MapItComponent } from './map-it/map-it.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ImageUploadComponent,
        LoginComponent,
        LoaderComponent,
        HouseDetailComponent,
        PropertyNotFoundComponent,
        ChatbotComponent,
        MessageListComponent,
        MessageItemComponent,
        MessageFormComponent,
        MapItComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppBootstrapModule,
        HttpClientModule,
    ],
    providers: [
        ImageUploadService,
        LoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
        CribsService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

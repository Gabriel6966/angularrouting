import { NgModule } from "@angular/core";
import { App } from "./app";
import { NotFoundComponent } from "./components/not-found-component/not-found-component";
import { HomeComponent } from "./components/home-component/home-component";
import { CineComponent } from "./components/cine-component/cine-component";
import { MusicaComponent } from "./components/musica-component/musica-component";
import { MenuComponent } from "./components/menu-component/menu-component";
import { routes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { provideBrowserGlobalErrorListeners } from "@angular/core";

@NgModule({
    declarations: [],
    imports: [BrowserModule, App, HomeComponent, CineComponent, MusicaComponent, NotFoundComponent, MenuComponent, RouterModule.forRoot(routes)],
    providers: [provideBrowserGlobalErrorListeners()],
    bootstrap: [App],
})
export class AppModule {}
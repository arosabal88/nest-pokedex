import{IsInt,IsPositive,Min,IsString, MinLength} from 'class-validator';


export class CreatePokemonDto {

@IsInt()
@IsPositive({message:`debe ser positivo`})
@Min(1)
no:number;

@IsString()
@MinLength(1)
name:string;

}

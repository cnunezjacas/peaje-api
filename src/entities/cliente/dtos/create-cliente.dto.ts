import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsEnum, IsArray, IsMongoId } from 'class-validator';
import { CategoriaCliente } from '../enums/categoria-cliente.enum';

export class CreateClienteDto {
  /* ======================================================================================= */
  @ApiProperty({
    description: 'Categoría del Cliente',
    enum: CategoriaCliente,
    example: CategoriaCliente.EMPRESA,
  })
  @IsNotEmpty({ message: 'La categoría del Cliente es obligatoria.' })
  @IsEnum(CategoriaCliente, { message: 'La categoría debe ser Empresa o Persona.' })
  categoria: CategoriaCliente;
  /* ======================================================================================= */

  @ApiProperty({ description: 'Código del Cliente', example: '487-847' })
  @IsNotEmpty({ message: 'El código del Cliente es obligatorio.' })
  @IsString({ message: 'El código debe ser un texto.' })
  codigo: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'Nombre del Cliente', example: 'Sebastián Guedez Laporta' })
  @IsNotEmpty({ message: 'El nombre del Cliente es obligatorio.' })
  @IsString({ message: 'El nombre debe ser un texto.' })
  nombre: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'Siglas', example: 'FGE', required: false })
  @IsOptional()
  @IsString({ message: 'Las siglas deben ser un texto.' })
  siglas?: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID de la Estación' })
  @IsNotEmpty({ message: 'La Estación es obligatoria.' })
  @IsMongoId({ message: 'El ID de la Estación debe ser un ObjectId válido.' })
  estacion: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID del Organismo', required: false })
  @IsOptional()
  @IsMongoId({ message: 'El ID del Organismo debe ser un ObjectId válido.' })
  organismo?: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID Tributaria', required: false })
  @IsOptional()
  @IsString({ message: 'El ID tributario debe ser un texto.' })
  idTributaria?: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID de la Cuenta CUC' })
  @IsNotEmpty({ message: 'La Cuenta CUC es obligatoria.' })
  @IsMongoId({ message: 'El ID de la Cuenta CUC debe ser un ObjectId válido.' })
  cuentaCUC: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID del Banco de la Cuenta CUC' })
  @IsNotEmpty({ message: 'El Banco de la Cuenta CUC es obligatorio.' })
  @IsMongoId({ message: 'El ID del Banco debe ser un ObjectId válido.' })
  bancoCuentaCUC: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID de la Cuenta CUP' })
  @IsNotEmpty({ message: 'La Cuenta CUP es obligatoria.' })
  @IsMongoId({ message: 'El ID de la Cuenta CUP debe ser un ObjectId válido.' })
  cuentaCUP: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID del Banco de la Cuenta CUP' })
  @IsNotEmpty({ message: 'El Banco de la Cuenta CUP es obligatorio.' })
  @IsMongoId({ message: 'El ID del Banco debe ser un ObjectId válido.' })
  bancoCuentaCUP: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'Registro Comercial', required: false })
  @IsOptional()
  @IsString({ message: 'El Registro Comercial debe ser un texto.' })
  registroComercial?: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'Registro Mercantil', required: false })
  @IsOptional()
  @IsString({ message: 'El Registro Mercantil debe ser un texto.' })
  registroMercantil?: string;
  /* ======================================================================================= */

  @ApiProperty({
    description: 'Teléfonos del Cliente',
    example: ['23 490123', '+53 56411278'],
    required: false,
  })
  @IsOptional()
  @IsArray({ message: 'Los teléfonos deben ser un array.' })
  @IsString({ each: true, message: 'Cada teléfono debe ser un texto.' })
  telefonos?: string[];
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID de la Provincia', required: false })
  @IsOptional()
  @IsMongoId({ message: 'El ID de la Provincia debe ser un ObjectId válido.' })
  provincia?: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'ID del Municipio', required: false })
  @IsOptional()
  @IsMongoId({ message: 'El ID del Municipio debe ser un ObjectId válido.' })
  municipio?: string;
  /* ======================================================================================= */

  @ApiProperty({ description: 'Dirección del Cliente', example: 'Calle #13, Banes, Holguín' })
  @IsNotEmpty({ message: 'La dirección es obligatoria.' })
  @IsString({ message: 'La dirección debe ser un texto.' })
  direccion: string;
  /* ======================================================================================= */
}

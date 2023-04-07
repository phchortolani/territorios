export interface Territorio {
    id?: number,
    territorio: number
    status: 'ABERTO' | 'OK' | 'CONVITES',
    casas: number
    folhas: number
    observacao?: string
}